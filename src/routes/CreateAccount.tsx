import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);
	const [data, setData] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			isLoading ||
			data.name === "" ||
			data.email === "" ||
			data.password === ""
		)
			return;

		try {
			setLoading(true);
			// 1. 계정 생성

			const credentials = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);
			console.log(credentials);
			console.log(credentials.user);

			// 2. 프로필 이름 설정
			await updateProfile(credentials.user, { displayName: data.name });

			// 3. 메인페이지로 ㄱㄱ!
			navigate("/");
		} catch (e) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<Title>JJJJoin</Title>
			<Form onSubmit={onSubmit}>
				<Input
					name="name"
					placeholder="Name"
					type="text"
					value={data.name}
					onChange={onChange}
					required
				/>
				<Input
					name="email"
					placeholder="email"
					type="email"
					value={data.email}
					onChange={onChange}
					required
				/>
				<Input
					name="password"
					placeholder="password"
					type="password"
					value={data.password}
					onChange={onChange}
					required
				/>
				<Input
					type="submit"
					placeholder="Name"
					required
					value={isLoading ? "로딩중 크크삥" : "create account"}
				/>
			</Form>
			{error !== "" ? <Error>{error}</Error> : null}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 420px;
	padding: 50px 0px;
`;

const Title = styled.h1`
	font-size: 42px;
`;

const Form = styled.form`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
`;

const Input = styled.input`
	padding: 10px 20px;
	border-radius: 50px;
	border: none;
	width: 100%;
	font-size: 16px;

	&[type="submit"] {
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`;

const Error = styled.span`
	color: tomato;
`;
