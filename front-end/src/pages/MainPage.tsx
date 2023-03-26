import styled from "styled-components";

export default function MainPage() {
  return (
    <Form>
      <Input>
        <div>Name</div>
        <input type="text" />
      </Input>
    </Form>
  );
}

const Form = styled.form``;

const Input = styled.div``;
