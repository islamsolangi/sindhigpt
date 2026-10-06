import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "SindhiGPT - سنڌي GPT | سنڌي AI چيٽ",
description: "SindhiGPT - سنڌي پهريون AI چيٽ بوٽ. سنڌي ۾ سوال جواب، شاعري، تاريخ، موسم Live",
keywords: ["SindhiGPT","Sindhi AI","سنڌي GPT"],
openGraph: {
title: "SindhiGPT - سنڌي ۾ ڳالهائيندڙ AI",
description: "دنيا جو پهريون سنڌي AI دوست",
url: "https://sindhigpt.vercel.app",
siteName: "SindhiGPT",
locale: "sd_PK",
type: "website",
},
robots: "index, follow",
};

export default function RootLayout(
{children}:{children:React.ReactNode}
){
return(
<html lang="sd" dir="rtl">
<body style={{margin:0,fontFamily:"system-ui"}}>
{children}
</body>
</html>
);
}
