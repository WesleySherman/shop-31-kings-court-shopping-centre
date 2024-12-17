var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---mall",
      "name": "01 - Mall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.130433030656434,
          "pitch": 0.1709445061573316,
          "rotation": 0,
          "target": "1-02---shop-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---shop-01",
      "name": "02 - Shop 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07409489671779212,
          "pitch": 0.24966233500996005,
          "rotation": 0,
          "target": "2-03---shop-02"
        },
        {
          "yaw": -2.9391813713987105,
          "pitch": 0.13966852704963628,
          "rotation": 0,
          "target": "0-01---mall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---shop-02",
      "name": "03 - Shop 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.5192452422436151,
        "pitch": 0.04867831714295434,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": 1.5650322297899377,
          "pitch": 0.22661732447836158,
          "rotation": 0,
          "target": "1-02---shop-01"
        },
        {
          "yaw": -1.2945414888965168,
          "pitch": 0.17866137596033127,
          "rotation": 0,
          "target": "3-04---shop-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---shop-03",
      "name": "04 - Shop 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": -0.6705628345425083,
          "pitch": 0.16331298508775127,
          "rotation": 0,
          "target": "2-03---shop-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shop 31, Kings Court Shopping Centre",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
