var s=Object.defineProperty;var t=(r,o)=>s(r,"name",{value:o,configurable:!0});import{T as e}from"./index.5f451be5.js";import{j as n}from"./jsx-runtime.7046dc92.js";import"./clsx.m.256e9345.js";import"./index.module.7d36700a.js";import"./index.74b837b1.js";import"./iframe.eda7b08e.js";const g={parameters:{storySource:{source:`import { ComponentStory, Meta, StoryObj } from '@storybook/react'\r
import { Text } from '.'\r
import { TextProps } from './types'\r
\r
export default {\r
  title: 'Component/Text',\r
  component: Text,\r
  args: {\r
    children: 'Lorem ipsum dolor sit.',\r
    size: 'md'\r
  },\r
  argTypes: {\r
    size: {\r
      options: ['sm', 'md', 'lg'],\r
      control: {\r
        type: 'inline-radio'\r
      }\r
    }\r
  }\r
} as Meta<TextProps>\r
\r
const Template: ComponentStory<typeof Text> = (args) => {\r
  return (\r
    <div className='p-4'>\r
      <Text {...args} />\r
    </div>\r
  )\r
}\r
export const Default = Template.bind({})\r
\r
export const CustomComponent: StoryObj<TextProps> = {\r
  args: {\r
    asChild: true,\r
    children: <strong>Strong tag</strong>,\r
    size: 'md'\r
  },\r
  argTypes: {\r
    children: {\r
      table: {\r
        disable: true\r
      }\r
    },\r
    asChild: {\r
      table: {\r
        disable: true\r
      }\r
    }\r
  }\r
}\r
`,locationsMap:{default:{startLoc:{col:46,line:22},endLoc:{col:1,line:28},startBody:{col:46,line:22},endBody:{col:1,line:28}}}}},title:"Component/Text",component:e,args:{children:"Lorem ipsum dolor sit.",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},i=t(r=>n("div",{className:"p-4",children:n(e,{...r})}),"Template"),T=i.bind({}),x={args:{asChild:!0,children:n("strong",{children:"Strong tag"}),size:"md"},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}},y=["Default","CustomComponent"];export{x as CustomComponent,T as Default,y as __namedExportsOrder,g as default};
//# sourceMappingURL=Text.stories.b376a533.js.map
