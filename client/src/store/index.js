import { proxy } from "valtio";


const state = proxy({
    intro: true,
    color: '#03ff14',
    isLogoTexture: true,
    isFulltexture: false,
    logoDecal: './l.png',
    fullDecal: './l.png',
})

export default state;