import React from "react";

export interface JoinFormProps {
  onSubmit?(e: { email: string; password: string }): void;
}

export const JoinForm: React.FC<JoinFormProps> = (props) => {
  return (
    <></>
    // <Container>
    //     <Title>회원가입</Title>
    //     <Form method='post' onSubmit={(e) => {
    //         e.preventDefault();

    //     }}
    //     <InputContainer>
    //     </InputContainer>
    // </Container>
  );
};
