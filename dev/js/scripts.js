import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin);

const mainTL = gsap.timeline();


function firstpart(){
    const tl = gsap.timeline();

    tl.to("#stem-one",{morphSVG:"#stem-four", duration: 7})
    tl.from("#leaf-3",{alpha: 0, xPercent:10, duration: 4, ease: "elastic.out(1, 0.5)"},"-=100%")
    tl.from("#leaf-2",{alpha: 0, xPercent:10, duration: 4, ease: "elastic.out(1, 0.5)"},"-=100%")
    tl.from("#leaf-1",{alpha: 0, xPercent:-10, duration: 4, ease: "elastic.out(1, 0.5)"},"-=100%")
    // morph is not working here. I asked for help from 3 different people and no one knew what to do. I looked at GSAP forums as well.
    tl.to("#stem-four",{morphSVG:"#letterA", duration: 1})
    
    tl.to("#leaf-3",{morphSVG:"#morphleaf3",duration: 1, ease: "none"},"-=100%")
    tl.to("#leaf-2",{morphSVG:"#morphleaf2",duration: 1, ease: "none"},"-=100%")
    tl.to("#leaf-1",{morphSVG:"#morphleaf1",duration: 1, ease: "none"},"-=100%")
    tl.from("#dark-green-inside",{alpha: 0, duration: 1})
    tl.from("#Albertsons",{alpha: 0, yPercent:-10, duration: 1})
    tl.from("#food-market",{alpha: 0, yPercent:10, duration: 1})
    tl.to("#morphleaf1",  {duration: .3, rotate:"+=3", yoyo:true})
    tl.to("#morphleaf1", {duration: .3, rotate:"-=1", yoyo:true, repeat:2})
    tl.to("#morphleaf2", {duration: .3, rotate:"+=4", yoyo:true},"-=100%")
    tl.to("#morphleaf2", {duration: .3, rotate:"-=2", yoyo:true, repeat:2},"-=100%")
    tl.to("#morphleaf3", {duration: .3, rotate:"-=1", yoyo:true, repeat:3},"-=100%")
    tl.to("#morphleaf3", {duration: .3, rotate:"+=3", yoyo:true},"-=100%")
    
    return tl;
}



mainTL.add(firstpart());


// GSDevTools.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();
MotionPathPlugin.create();
