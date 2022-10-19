var i=Object.defineProperty;var e=(r,t)=>i(r,"name",{value:t,configurable:!0});import{H as o}from"./index.dfc46238.js";import{j as n}from"./jsx-runtime.7046dc92.js";import"./clsx.m.256e9345.js";import"./index.module.7d36700a.js";import"./index.74b837b1.js";import"./iframe.eda7b08e.js";const u={parameters:{storySource:{source:`import { ComponentStory, Meta, StoryObj } from '@storybook/react'\r
import { Heading } from '.'\r
import { HeadingProps } from './types'\r
\r
export default {\r
  title: 'Component/Heading',\r
  component: Heading,\r
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
} as Meta<HeadingProps>\r
\r
const Template: ComponentStory<typeof Heading> = (args) => {\r
  return (\r
    <div className='p-4'>\r
      <Heading {...args} />\r
    </div>\r
  )\r
}\r
export const Default = Template.bind({})\r
\r
export const CustomComponent: StoryObj<HeadingProps> = {\r
  args: {\r
    asChild: true,\r
    children: <h1>H1 tag</h1>,\r
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
`,locationsMap:{default:{startLoc:{col:49,line:22},endLoc:{col:1,line:28},startBody:{col:49,line:22},endBody:{col:1,line:28}}}}},title:"Component/Heading",component:o,args:{children:"Lorem ipsum dolor sit.",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},s=e(r=>n("div",{className:"p-4",children:n(o,{...r})}),"Template"),y=s.bind({}),h={args:{asChild:!0,children:n("h1",{children:"H1 tag"}),size:"md"},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}},C=["Default","CustomComponent"];export{h as CustomComponent,y as Default,C as __namedExportsOrder,u as default};
//# sourceMappingURL=Heading.stories.9ab81826.js.map
