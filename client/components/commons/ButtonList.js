import Button from './Button';

const ButtonList = (props) => {
    return(
        <div>
            {
                props.list ? props.list.map((data, i)=> 
                                <ButtonItem key={i} {...data}>
                                    <Button onClick={() => props.onApply([data])} className="btn-7">
                                        {data.name}
                                    </Button>
                                </ButtonItem>
                            ) : null
            }
            {props.children}
        </div>
    );
};

const ButtonItem = (props) => {
	return(
	    <div className="filter-button-item">{props.children}</div>
    );
};

export { ButtonItem };
export default ButtonList;