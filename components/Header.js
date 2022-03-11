import Link from 'next/link'

const Header = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href="/About">
                    <a>About Us</a>
                </Link>
            </li>

            <li>
                <Link href="/blog/hello-world">
                    <a>Blog Post</a>
                </Link>
            </li>
            <li>
                <Link href="/post/hello">
                    <a>Dynamic router with basic PID</a>
                </Link>
            </li>

            <li>
                <Link href="/post/mony?username=tunphitcha&Password=171033">
                    <a>Dynamic router with query param</a>
                </Link>
            </li>

            <li>
                <Link href="/abc">
                    <a>Link to 404 Page</a>
                </Link>
            </li>
        </ul>
    )
}

export default Header