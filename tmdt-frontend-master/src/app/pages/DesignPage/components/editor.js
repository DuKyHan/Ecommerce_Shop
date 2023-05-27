import React from 'react';
import html2canvas from 'html2canvas';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Input,
  Button,
} from '@mui/material';
import { axiosClient } from 'data';
import { Text } from 'react-konva';
import ColoredRect from './Tool.js';

export default function Editor({
  tshirt,
  elStage,
  tshirtOnChange,
  setSelected,
  selected,
  setModal,
}) {
  const [weight, setWeight] = React.useState(null);
  const [color, setColor] = React.useState(null);
  const [fileUpload, setFileUpload] = React.useState({});
  const [dlImage, setDLimage] = React.useState(false);

  function changeColor(color) {
    tshirtOnChange({
      ...tshirt,
      color: color,
    });
  }

  function changeDirection(e) {
    tshirtOnChange({
      ...tshirt,
      direction: e.target.value,
    });
  }

  function _designLabel(val, direction) {
    let setVal = val;
    let dl_front = document.getElementById('dl_front');
    let dl_back = document.getElementById('dl_back');
    if (setVal === null) {
      if (direction === 'front') {
        setVal = 'Front Design';
      } else {
        setVal = 'Back Design';
      }
    }

    if (direction === 'front') {
      dl_front.innerHTML = setVal;
    } else {
      dl_back.innerHTML = setVal;
    }
  }

  function changeDesign(e) {
    const file = e.target.files[0];
    console.log(file.name);
    const input_name = e.target.name;
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    // check is file an image
    if (file && acceptedImageTypes.includes(file['type'])) {
      const design = URL.createObjectURL(file);
      // set label image
      _designLabel(file.name, input_name);

      // Get image width
      let img = new Image();
      img.src = design;
      img.onload = function () {
        // console.log(canvas_width)
        // console.log(this.width + " " + this.height);
        setFileUpload({
          stream: design,
          direction: input_name,
          width: this.width,
          height: this.height,
        });
      };
    } else {
      // console.log('anajay bukan gambar')
      setModal({
        isOpen: true,
        message: 'Please upload an image file (jpg, jpeg, png)',
      });
      e.target.value = null;
    }
  }

  React.useEffect(() => {
    function _calculate_image_size(type, originalWidth, originalHeight) {
      const canvas = Math.round((40 * elStage.current.clientWidth) / 100);

      if (originalWidth >= canvas) {
        const maxWidth = canvas;
        const maxHeight = Math.round((55 * elStage.current.clientWidth) / 100);
        var ratio = 0; // Used for aspect ratio
        var width = originalWidth; // Current image width
        var height = originalHeight; // Current image height

        let newWidth = maxWidth;
        let newHeight = maxWidth;

        if (width > maxWidth && width > height) {
          ratio = width / height;
          newHeight = maxWidth / ratio;
          newWidth = maxWidth;
        } else if (height > maxHeight && height > width) {
          ratio = height / width;
          newWidth = maxHeight / ratio;
          newHeight = maxHeight;
        }

        if (type === 'width') {
          return newWidth;
        } else {
          return newHeight;
        }
      }
      return originalWidth;
    }

    if (Object.keys(fileUpload).length > 0) {
      tshirtOnChange({
        ...tshirt,
        designs: {
          ...tshirt.designs,
          [fileUpload.direction]: {
            ...tshirt.designs[fileUpload.direction],
            preview: fileUpload.stream,
            positions: {
              ...tshirt.designs[fileUpload.direction].positions,
              width: _calculate_image_size(
                'width',
                fileUpload.width,
                fileUpload.width,
              ),
              height: _calculate_image_size(
                'height',
                fileUpload.width,
                fileUpload.height,
              ),
            },
          },
        },
      });

      setFileUpload({});
    }
  }, [fileUpload, tshirt, tshirtOnChange, elStage]);

  const downloadURI = (uri, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  React.useEffect(() => {
    if (dlImage && !selected) {
      saveImage();
      setDLimage(false);
    }

    function saveImage() {
      let element = document.getElementById('myDesign');
      const windowW = window.innerWidth;
      if (windowW < 1024) {
        element.style.position = 'fixed';
        element.style.zIndex = 999;
        element.style.left = 0;
      }

      html2canvas(element, {
        allowTaint: true,
        removeContainer: false,
        backgroundColor: null,
      }).then(canvas => {
        if (windowW < 1024) {
          element.style.position = null;
          element.style.zIndex = null;
          element.style.left = null;
        }
        const image = axiosClient
          .post('/files/upload', { file: canvas.toDataURL('image/png') })
          .then(data => {})
          .catch();
        return image;
        // downloadURI(canvas.toDataURL('image/png'), 'tes');
        // document.body.appendChild(canvas);
      });
    }
  }, [dlImage, setDLimage, selected]);

  // function AddCart() {
  //   alert('any');
  // }

  // React.useEffect(() => {
  //     console.log('editor loaded')
  // }, [])

  return (
    <div
      onClick={() => setSelected(false)}
      className="w-full py-10 lg:py-0 min-h-0 lg:min-h-screen flex items-center justify-center"
    >
      <div className="w-full px-5 lg:px-10">
        <div className="mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            MÀU ÁO
          </label>
          <div className="flex -m-3">
            <div
              onClick={() => changeColor('black')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700"
              style={{ width: '50px', height: '50px', background: 'black' }}
            ></div>
            <div
              onClick={() => changeColor('white')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700"
              style={{ width: '50px', height: '50px', background: 'white' }}
            ></div>
            <div
              onClick={() => changeColor('pink')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700 border-pink-700"
              style={{ width: '50px', height: '50px', background: 'white' }}
            ></div>
            <div
              onClick={() => changeColor('green')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700 border-green-700"
              style={{ width: '50px', height: '50px', background: 'white' }}
            ></div>
            <div
              onClick={() => changeColor('red')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700 border-red-700"
              style={{ width: '50px', height: '50px', background: 'white' }}
            ></div>
            <div
              onClick={() => changeColor('blue')}
              className="rounded-full m-3 cursor-pointer border-solid border-2 border-gray-700 border-blue-700"
              style={{ width: '50px', height: '50px', background: 'white' }}
            ></div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            THIẾT KẾ
          </label>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mặt áo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={changeDirection}
            >
              <MenuItem value="front">Truớc</MenuItem>
              <MenuItem value="Back">Sau</MenuItem>
            </Select>
          </FormControl>

          {/* <Select
            onChange={changeDirection}
            labelId="label"
            id="select"
            value="20"
          >
            <MenuItem value="Back">Back</MenuItem>
            <MenuItem value="front">Front</MenuItem>
          </Select> */}
        </div>

        {/* <ColoredRect /> */}

        <div className="mb-5">
          <div className="flex -m-3">
            <FormControl sx={{ ml: 1.7, width: '8ch' }}>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-size"
                label="Size"
              >
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="14">14</MenuItem>
                <MenuItem value="18">18</MenuItem>
                <MenuItem value="24">24</MenuItem>
                <MenuItem value="32">32</MenuItem>
                <MenuItem value="48">48</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ ml: 1.9, width: '15ch' }}>
              <InputLabel id="demo-simple-select-label">Font</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-font"
                label="Font"
              >
                <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                <MenuItem value="Arial">Arial</MenuItem>
                <MenuItem value="Helvetica">Helvetica</MenuItem>
                <MenuItem value="Lucida">Lucida</MenuItem>
                <MenuItem value="Luminari">Luminari</MenuItem>
                <MenuItem value="Verdana">Verdana</MenuItem>
                <MenuItem value="Palatino">Palatino</MenuItem>
                <MenuItem value="Baskerville">Baskerville</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ ml: 1.9, width: '13ch' }}>
              <InputLabel id="demo-simple-select-label">Weight</InputLabel>
              <Select
                labelId="select-weight-id"
                id="select-weight"
                label="weight"
              >
                <MenuItem value="100">Thin</MenuItem>
                <MenuItem value="200">Extra Light</MenuItem>
                <MenuItem value="300">Light</MenuItem>
                <MenuItem value="400">Regular</MenuItem>
                <MenuItem value="500">Medium</MenuItem>
                <MenuItem value="600">SemiBold</MenuItem>
                <MenuItem value="700">Bold</MenuItem>
                <MenuItem value="800">Extra Bold</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" component="label" sx={{ ml: 2 }}>
              Color
              <Input type="color" id="select-color" color="secondary"></Input>
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            THÊM HÌNH ẢNH
          </label>
          <label
            className="w-full block cursor-pointer text-xs mb-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            htmlFor="d_front"
          >
            <span className="truncate block" id="dl_front">
              Mặt trước
            </span>
            <input
              id="d_front"
              onChange={changeDesign}
              className="w-full hidden"
              type="file"
              name="front"
            />
          </label>

          <label
            className="w-full block cursor-pointer mb-3 text-xs bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            htmlFor="d_back"
          >
            <span className="truncate block" id="dl_back">
              Mặt sau
            </span>
            <input
              id="d_back"
              onChange={changeDesign}
              className="w-full hidden"
              type="file"
              name="back"
            />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="contained"
            color="success"
            size="lagre"
            onClick={() => {
              setDLimage(true);
            }}
          >
            Lưu thiết kế
          </Button>
          <Button variant="contained" sx={{ ml: 2 }} size="lagre">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
}
