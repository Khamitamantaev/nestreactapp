import { SignupContainer } from './signup.container';
import {
  PageLayout,
  ContentLayout,
  AuthLayout,
  SectionLayout,
} from '../../lib/elements/layout';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SectionLayout>
            <SignupContainer />
          </SectionLayout>
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
