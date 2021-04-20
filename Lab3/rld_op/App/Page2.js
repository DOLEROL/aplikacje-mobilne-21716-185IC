import * as React from 'react';
import { lazy, Suspense} from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from '../style/styles';

const LazyLoremIpsum1 = lazy(() => import('./LazyData'));
const LazyLoremIpsum2 = lazy(() => import('./LoremImpus'));

const progressStepsStyle = {
  activeStepIconBorderColor: '#ff3333',
  activeLabelColor: '#e60000',
  activeStepNumColor: 'white',
  activeStepIconColor: '#ff4d4d',
  completedStepIconColor: '#cc0000',
  completedProgressBarColor: '#cc0000',
  completedCheckColor: '#ffb3b3'
};

const buttonTextStyle = {
  color: '#686868',
  fontWeight: 'bold'
};

onSubmitSteps = () => Alert.alert(
  "Alert",
  "🎉🎉 🥳 🎉🎉",
  [
    {
      text: "Cancel",
      style: "cancel"
    },
    { 
      text: "OK"
    }
  ]
);

export default function Page2() {
  return (
    <View style={styles.Container}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <Suspense fallback={<ActivityIndicator color="#e6e600" size="large" />}>
            <Text style={[ styles.baseText, styles.textStyle ]}>
              <LazyLoremIpsum1 />
            </Text>
          </Suspense>
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <Suspense fallback={<ActivityIndicator color="#00e673" size="small" />}>
            <Text style={[ styles.baseText, styles.textStyle ]}>
              <LazyLoremIpsum2 />
              <LazyLoremIpsum1 />
            </Text>
          </Suspense>
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <Suspense fallback={<ActivityIndicator color="#0073e6" size="large" />}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[ styles.baseText, styles.textStyle ]}>
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                  To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? 
                  But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </Text>
            </View>
          </Suspense>
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <Suspense fallback={<ActivityIndicator color="#00e6e6" size="large" />}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[ styles.baseText, styles.textStyle ]}>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                  Et harum quidem rerum facilis est et expedita distinctio. 
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </Text>
            </View>
          </Suspense>
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle} onSubmit={onSubmitSteps}>
          <Suspense fallback={<ActivityIndicator color="#00e639" size="large" />}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[ styles.baseText, styles.textStyle ]}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Duis mi nibh, imperdiet sed quam placerat, dignissim tempor magna. 
                  In sollicitudin maximus nisl id sollicitudin. Etiam rhoncus fringilla urna, eget mollis urna lobortis nec. 
                  Praesent a mauris et turpis dapibus varius ut a sem. In hac habitasse platea dictumst. 
                  Vivamus purus sem, eleifend ac mi fermentum, faucibus porttitor ligula. Etiam venenatis tortor in nulla eleifend, eget viverra arcu cursus. 
                  In hac habitasse platea dictumst. Praesent et elementum felis, gravida sodales quam. 
                  Fusce eu lectus eu nibh placerat feugiat nec ac nisl. Pellentesque varius odio cursus, pulvinar orci vitae, cursus lacus. 
                  Donec pellentesque tincidunt augue rutrum volutpat. Morbi rutrum justo non velit commodo dictum. 
                  In egestas, felis ut luctus sagittis, sapien odio condimentum nunc, et volutpat lectus ipsum vel nisl."
                </Text>
            </View>
          </Suspense>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}