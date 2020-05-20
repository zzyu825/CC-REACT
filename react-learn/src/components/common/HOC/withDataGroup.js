import React from 'react';
import types from '../../../utils/commonTypes'

/**
 * 实现根据数据渲染出的一组表单组件
 */
export default function(Comp) {
    return class CheckboxGroup extends React.Component {

        static defaultProps = {
            datas: []
        }

        static propTypes = {
            datas: types.groupDatas
        }

        render() {
            const cbArr = this.props.datas.map(it => <Comp key={it.value} {...this.props} info={it}/>);
            return <>
                {cbArr}
            </>
        }
    }
}