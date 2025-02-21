import { useState } from "react";
import styled from "styled-components";

export default function CreateAccount() {
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

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// 1. 계정 생성
			// 2. 프로필 이름 설정
			// 3. 메인페이지로 ㄱㄱ!
		} catch (e) {
		} finally {
		}

		console.log(data);
	};

	return (
		<Wrapper>
			<Title />
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
