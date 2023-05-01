import react from 'react'

export default class DashUser extends react.Component {

    setAvatar = () => {
        const avatarUser = document.querySelector('.dashUser')
        avatarUser?.setAttribute('style', 'background-image:url()')
        console.log(avatarUser)
    }

    componentDidMount(): void {
        // this.setAvatar()
    }


    render() {
        return (
            <div className="dashUser h-9 w-9 bg-blue-500 mr-3 rounded-full">
                
            </div>
        )
    }
}