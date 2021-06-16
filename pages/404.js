import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 4000);
	}, []);

	return (
		<div className="error-container">
			<Image src="/404.svg" alt="Error svg image" width={500} height={500} />
			<div className="error-content">
				<h1> UGH! Looks like you are lost</h1>
				<p className="error-text">The page you are looking for can't be found.</p>
				<Link href="/">
					<a className="button">Go back Home</a>
				</Link>
			</div>

			<style jsx>{`
				.error-container {
					display: flex;
					justify-content: center;
				}
				.error-content {
					margin-top: 2rem;
					margin-left: 1rem;
				}
				.error-text {
					margin-buttom: 20px;
				}
				.button {
					text-decoration: none;
					background-color: #000;
					color: #fefefe;
					padding: 10px 20px;
				}
			`}</style>
		</div>
	);
};

export default ErrorPage;
