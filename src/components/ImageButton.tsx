type ImageButtonProps = {
    image: string;
    onClick: () => void;
};

export default function ImageButton(props: ImageButtonProps) {
    return (
        <button onClick={props.onClick} style={{ flex: "0 0 auto" }}>
            <img src={props.image} alt="Button" style={{ width: "100px", height: "100px" }} />
        </button>
    );
}