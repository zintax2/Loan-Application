export default function Model({ isVisibaled, errorMassage = null }) {
  if (isVisibaled) {
    return (
      <div>
        <div className="model">
          <div className="modef-content">
            <h1 style={{color:errorMassage!=null?"red":"green"}}>
              {errorMassage != null
                ? errorMassage
                : "the Form Has Heen Submitted Successfully"}
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
