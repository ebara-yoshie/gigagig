PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.blue)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.white)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.yellow)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        cuteBot.motors(45, -100)
    }
})
