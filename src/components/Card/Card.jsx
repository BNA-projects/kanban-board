import * as S from "./Card.styled";

function Card({ id, title, onRemove }) {
  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onRemove(id);
    }
  };
  return (
    <S.CardItem>
      <S.Card>
        <S.CardHeader>
         <S.RemoveIcon
            src="/removeIcon.svg"
            alt="Remove card"
            onClick={handleRemove}
          />
        </S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
      </S.Card>
    </S.CardItem>
  );
}

export default Card;
