interface ColorInterface {
    brightGreen: string,
    green: string,
    darkGreen: string
}

interface FontInterface {
    retro: string
}
export interface themeInterface {
    colors: ColorInterface
    fonts: FontInterface
}

export interface GenericObject {
    [key: string]: string
}