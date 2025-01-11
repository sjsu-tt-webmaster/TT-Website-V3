// /app/auth/login/page.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "@/lib/supabase";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	useEffect(() => {
		const checkUser = async () => {
			const user = await supabase.auth.getUser();
			if (user) {
				router.push("/user-dashboard"); // Redirect to dashboard if already logged in
			}
		};
		checkUser();
	}, [router]);

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(error.message);
		} else {
			router.push("/user-dashboard"); // Redirect to dashboard
		}
	};

	return (
		<div>
			<form onSubmit={handleLogin}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<button type="submit">Log In</button>
			</form>

			{error && <p>{error}</p>}
		</div>
	);
};

export default LoginPage;
