import React from 'react';

function isActveTab(Component) {
    return class Wrapper extends React.Component {
        constructor() {
            super();
            this.state = {
                isActive: null
            }
        }

        selectTab = (e) => {
            this.setState({ isActive: e.target.id })
        }

        render() {
            return(
                <>
                    <Component select={this.selectTab} />
                </>
            )
        }
    }
}
    
export default isActveTab;