import dynamic from "next/dynamic";

export default dynamic( () => import("../components/CodePlayGround.jsx"), {
    ssr:false,
});