import { useMediaQuery } from "react-responsive";
export default function Mission () {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return(<div style={{background: '#0B0E13', width: "100%", paddingBottom:'100.5%', zIndex:0}}>

            {isDesktopOrLaptop &&<img style={{height:"60vh", width:"100%", objectFit: "cover", objectPosition:"0% -40vw", marginTop:65, opacity:'.8'}} src="https://cdn.openart.ai/uploads/upscaled/road-to-heaven-fantasy-art-of-war-art-nouveau-bushido-black-white-gold_KSpesd1g_upscaled.jpg" alt="" />}
            {isDesktopOrLaptop &&<h2 style={{color:"white", position:'relative', top:'-310px', left:'520px', fontSize:'33px', WebkitTextStroke:"1px black", textShadow: '1px 1px 13px rgb(65 68 77/ 100%)', fontWeight:'bold', width:"50%"}}> "Our Mission is to act as a guide to <br></br> the travellers in this Ultimate path."</h2>}

            {isTabletOrMobile &&<img style={{height:"30vh", width:"100%", objectFit: "cover", objectPosition:"0% -40vw", marginTop:37}} src="https://cdn.openart.ai/uploads/upscaled/road-to-heaven-fantasy-art-of-war-art-nouveau-bushido-black-white-gold_KSpesd1g_upscaled.jpg" alt="" />}
            {isTabletOrMobile &&<h2 style={{color:"white", position:'relative', top:'-170px', left:'180px', fontSize:'20px', WebkitTextStroke:"1px black", textShadow: '1px 1px 13px rgb(65 68 77/ 100%)', fontWeight:'bold', width:"60%"}}> "Our Mission is to act as <br></br> a guide to the travellers <br></br> in this Ultimate path."</h2>}
    </div>)
}