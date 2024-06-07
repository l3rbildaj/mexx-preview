import SmoothScrolling from "@/components/ui/SmoothScrolling";
import "@/styles/globals.css";


// export const dynamic = 'force-static';
export default function App({ Component, pageProps }) {
  return (
    <>
        <SmoothScrolling>
          <Component {...pageProps} />
        </SmoothScrolling>
    </>
  );
}
