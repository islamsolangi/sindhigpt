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
<head>
<meta name="monetag" content="1b861edf7e6a08817f4c6c72324d7c32" />
<script src="https://quge5.com/88/tag.min.js" data-zone="292133" async data-cfasync="false"></script>
</head>
<body style={{margin:0,fontFamily:"system-ui"}}>
{children}
</body>
</html>
);
}
