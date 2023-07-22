import { useMediaQuery } from "react-responsive";

export default function Team() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'70px', zIndex:-1}}>
        <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'8vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'35vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img>
            </div>}
            {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'20vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png"  alt=""></img>
            </div>}
            <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'.1vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'35vh'}}>
         <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/91c0f871-c16a-4a9b-8606-60adfef75b4d.png" style={{transform:" scaleX(-1)"}} alt=""></img>
            </div>}
            {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'20vh'}}>
         <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/91c0f871-c16a-4a9b-8606-60adfef75b4d.png" style={{transform:" scaleX(-1)"}} alt=""></img>
            </div>}
            <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'.1vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'35vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/fdd9cfdf-a1ae-40c2-984a-26526d0eb98f.png" alt=""></img>
        </div>}
        {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'20vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/fdd9cfdf-a1ae-40c2-984a-26526d0eb98f.png" alt=""></img>
        </div>}
    </div>
)}