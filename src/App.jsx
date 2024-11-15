import { lazy, Suspense } from "react";
import LoadingSpinner from "./atoms/LoadingSpinner/LoadingSpinner.jsx";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const DescriptionCto2 = lazy(() =>
  import("./components/DescriptionCto2/DescriptionCto2.jsx")
);
const DescriptionCto3 = lazy(() =>
  import("./components/DescriptionCto3/DescriptionCto3.jsx")
);
const ProductSilo = lazy(() =>
  import("./components/ProductSilo/ProductSilo.jsx")
);
const SizeVars = lazy(() => import("./components/SizeVar/SizeVar.jsx"));
const ColorVar = lazy(() => import("./components/ColorVar/ColorVar.jsx"));
const FabricVar = lazy(() => import("./components/FabricVar/FabricVar.jsx"));
const LifeStyle = lazy(() => import("./components/LifeStyle/LifeStyle.jsx"));
const CloseUpShots = lazy(() =>
  import("./components/CloseUpShots/CloseUpShots.jsx")
);
const Installation = lazy(() =>
  import("./components/Installation/Installation.jsx")
);
const Dimensions = lazy(() => import("./components/Dimensions/Dimensions.jsx"));
const Callout = lazy(() => import("./components/Callout/Callout.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));



export default function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <DescriptionCto2 />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <DescriptionCto3 />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ProductSilo />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SizeVars />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ColorVar />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FabricVar />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LifeStyle />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CloseUpShots />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Installation />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Dimensions />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Callout />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}