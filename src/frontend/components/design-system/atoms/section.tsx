/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Box } from './box'

/**
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * Usage:
 * ```javascript
 * import { Section } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 */
const Section = styled(Box)`
  border-left: ${({ theme }): string => theme.space.sm} solid ${({ theme }): string => theme.colors.primary20};
  padding-left: ${({ theme }): string => theme.space.default};
`

export { Section }

export default Section
