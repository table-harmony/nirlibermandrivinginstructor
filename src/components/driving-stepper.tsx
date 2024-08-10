import {
  Step,
  type StepItem,
  Stepper,
  useStepper,
} from '@/components/ui/stepper'
import { Button } from '@/components/ui/button'
import { CarIcon, FormInputIcon, PhoneCallIcon } from 'lucide-react'

const steps = [
  { label: 'צעד ראשון', body: 'הסבר', icon: PhoneCallIcon },
  { label: 'צעד שני', body: 'הסבר', icon: FormInputIcon },
  { label: 'צעד שלישי', body: 'הסבר', icon: CarIcon },
] satisfies StepItem[]

export function DrivingStepper() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper orientation="vertical" initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={index} {...stepProps}>
              <div className="my-4 h-40 rounded-md border border-border p-4">
                {stepProps.body}
              </div>
            </Step>
          )
        })}
        <Footer />
      </Stepper>
    </div>
  )
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
  } = useStepper()
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="flex h-40 items-center justify-center rounded-md border border-border bg-secondary">
          <h1 className="text-xl"> סיימת את כל הצעדים! 🎉</h1>
        </div>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            לאתחל
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              קודם
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? 'סיום' : 'הבא'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
