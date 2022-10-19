var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{B as n}from"./index.e3aeb836.js";import{j as r}from"./jsx-runtime.7046dc92.js";import"./index.module.7d36700a.js";import"./index.74b837b1.js";import"./iframe.eda7b08e.js";const d={parameters:{storySource:{source:`import { ComponentStory, Meta } from '@storybook/react'\r
import { Button } from '.'\r
import { ButtonProps } from './types'\r
\r
export default {\r
  title: 'Component/Button',\r
  component: Button,\r
  args: {\r
    children: 'Create account'\r
  },\r
  argTypes: {}\r
} as Meta<ButtonProps>\r
\r
const Template: ComponentStory<typeof Button> = (args) => {\r
  return (\r
    <div className='p-4 w-[400px]'>\r
      <Button {...args} />\r
    </div>\r
  )\r
}\r
export const Default = Template.bind({})\r
`,locationsMap:{default:{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Component/Button",component:n,args:{children:"Create account"},argTypes:{}},s=o(t=>r("div",{className:"p-4 w-[400px]",children:r(n,{...t})}),"Template"),B=s.bind({}),f=["Default"];export{B as Default,f as __namedExportsOrder,d as default};
//# sourceMappingURL=Button.stories.bfca526c.js.map
