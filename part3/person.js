const maxlength = 6;

function Person({ age, hobbies, name}){
    const voteText = age >= 18
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p> Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, maxlength)}</li>
                <li>Age:{age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}