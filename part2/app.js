function App(){
    return (
        <div>
            <Tweet 
            name='Matthew H'
            username ='matthew'
            date={new Date().toDateString()}
            message='Drisuption'
            />
            <Tweet
            name='Nova S'
            username='superNova'
            date={new Date().toDateString()}
            message='#Ilovehastags'
            />
            <Tweet
            name='Time'
            username='Time'
            date={new Date().toDateString()}
            message='Follow me'
            />
        </div>
    );
}