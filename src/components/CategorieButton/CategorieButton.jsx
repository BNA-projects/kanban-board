import * as S from "./CategorieButton.styled";

function CategorieButton({ topic }) {
  return (
    <S.CategorieButton $topic={topic}>
      <S.CategorieText $topic={topic}>{topic}</S.CategorieText>
    </S.CategorieButton>
  );
}

export default CategorieButton;
