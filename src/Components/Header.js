import '../App.css';

function Header() {


    return (<div style={
        { position: 'fixed', top: '0px', backgroundColor: '#fff', width: '100%', zIndex: '999' }
    } >
        <div className="header-background" >
            <div className='logo' > SneakerStore </div>
        </div >
    </div>
    );
}

export default Header;