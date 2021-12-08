import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin);

const mainTL = gsap.timeline();


function firstpart(){
    const tl = gsap.timeline();

    tl.to("#stem-one",{morphSVG:"#stem-four",duration: 10})
    tl.from("#leaf-3",{alpha: 0, xPercent:10, duration: 5, ease: "elastic.out(1, 0.5)"},"-=100%")
    tl.from("#leaf-2",{alpha: 0, xPercent:10, duration: 5, ease: "elastic.out(1, 0.5)"},"-=100%")
    tl.from("#leaf-1",{alpha: 0, xPercent:-10, duration: 5, ease: "elastic.out(1, 0.5)"},"-=100%")
    tl.to("#stem-four",{morphSVG:"#letterA", duration:3})
    tl.to("#leaf-3",{morphSVG:"#morphleaf3",duration: 2, ease: "none"},"-=100%")
    tl.to("#leaf-2",{morphSVG:"#morphleaf2",duration: 2, ease: "none"},"-=100%")
    tl.to("#leaf-1",{morphSVG:"#morphleaf1",duration: 2, ease: "none"},"-=100%")
    tl.from("#dark-green-inside",{alpha: 0, duration: 1})
    tl.from("#Albertsons",{alpha: 0, yPercent:-10, duration: 1})
    tl.from("#food-market",{alpha: 0, yPercent:10, duration: 1});
}



mainTL.add(firstpart());

// GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();
MotionPathPlugin.create();
