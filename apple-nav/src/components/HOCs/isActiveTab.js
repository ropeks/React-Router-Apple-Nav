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
            !this.state.isActive
            ? this.setState({ isActive: e.target.id })
            : this.setState({ isActive: null });
        }

        render() {
            return(
                <>
                    <Component active={this.state.isActive} select={this.selectTab} />
                </>
            )
        }
    }
}
    
export default isActveTab;