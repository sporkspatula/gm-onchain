import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../src/env-vars";

class CreateAuctionHouseDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <script>{`/*
    
    GGGGGGGGGGGGGMMMMMMMM               MMMMMMMM
    GGG::::::::::::GM:::::::M             M:::::::M
  GG:::::::::::::::GM::::::::M           M::::::::M
  G:::::GGGGGGGG::::GM:::::::::M         M:::::::::M
G:::::G       GGGGGGM::::::::::M       M::::::::::M
G:::::G              M:::::::::::M     M:::::::::::M
G:::::G              M:::::::M::::M   M::::M:::::::M
G:::::G    GGGGGGGGGGM::::::M M::::M M::::M M::::::M
G:::::G    G::::::::GM::::::M  M::::M::::M  M::::::M
G:::::G    GGGGG::::GM::::::M   M:::::::M   M::::::M
G:::::G        G::::GM::::::M    M:::::M    M::::::M
G:::::G       G::::GM::::::M     MMMMM     M::::::M
  G:::::GGGGGGGG::::GM::::::M               M::::::M
  GG:::::::::::::::GM::::::M               M::::::M
    GGG::::::GGG:::GM::::::M               M::::::M
        GGGGGG   GGGGMMMMMMMM               MMMMMMMM
                                                    

https://twitter.com/gm__onchain

*/`}</script>
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
              rel="stylesheet"
            />
            {GA_TRACKING_ID && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
                  }}
                />
              </>
            )}
          </Head>
          <body style={{margin:0,padding:0}}>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default CreateAuctionHouseDocument;
