/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key:"Referrer-Policy",
            value:"strict-origin-when-cross-origin",
          }
          
          
        ]
      }
    ]
  }
};

// The headers() function in the Next.js configuration is used to define custom HTTP headers that will be included in the responses sent by the server. In this example, the function returns an array of header configurations, where each configuration specifies a source (the URL pattern) and an array of headers to be applied to that source.
// In this case, the headers are applied to all routes (indicated by the source "/(.*)"), and the headers include:
// 1. X-Frame-Options: DENY - This header prevents the page from being displayed in a frame or iframe, which can help protect against clickjacking attacks.
// 2. X-Content-Type-Options: nosniff - This header prevents the browser from MIME-sniffing a response away from the declared content-type, which can help prevent certain types of attacks.
// 3. Referrer-Policy: strict-origin-when-cross-origin - This header controls how much referrer information is included with requests made from your site to other sites, enhancing privacy and security.
// By defining these headers in the Next.js configuration, you can enhance the security of your application by controlling how browsers handle your content and interactions with other sites.

export default nextConfig;
