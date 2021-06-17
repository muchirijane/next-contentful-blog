import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<Link href="/">
					<a>
						<h1>
							<span>Home Made</span>
							<span>Chef</span>
						</h1>
						<h2>Be your own chef at home</h2>
					</a>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright &copy; {new Date().getFullYear() } Home Made chef <span>🍣 </span> </p>
			</footer>
		</div>
	);
}
