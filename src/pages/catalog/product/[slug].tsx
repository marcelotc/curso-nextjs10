import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

export default function Product() {
    const router = useRouter();

    return (
        <h1>{router.query.slug}</h1>
    );
}