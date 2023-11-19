const Nitendo = () => {
  return (
    <img src="data:image/png;base64,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" />
  );
};

export default Nitendo;