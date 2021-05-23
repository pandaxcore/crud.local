import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">LVComment</Navbar.Brand>
                <Nav className="mr-auto navbar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/add">Add Comment</Link>
                            <Link to="/update">Update Comment</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </Nav>

                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}

export default Header