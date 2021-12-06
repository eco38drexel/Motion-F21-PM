import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const mainTL = gsap.timeline();


function LogoAnimation(){
    const tl = gsap.timeline();

    tl.from("#stem-five",{scale:0, duration:4, y:"-=4"})
    tl.from("#leaf-2", {scale:0, duration:4});
    tl.from("#leaf-3", {scale:0, duration:4});
    tl.from("#leaf-1", {scale:0, duration:4});

}

mainTL.add(LogoAnimation());