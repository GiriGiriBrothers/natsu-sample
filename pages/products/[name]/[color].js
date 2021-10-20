import { useRouter } from "next/dist/client/router";

export default function Color() {

    const router = useRouter();
    const { name, color } = router.query;
    console.log(router.query);

    return (
        <h1>{ name }の{ color }カラーです。</h1>
    )
}