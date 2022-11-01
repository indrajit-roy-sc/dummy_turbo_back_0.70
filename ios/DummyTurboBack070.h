#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDummyTurboBack070Spec.h"

@interface DummyTurboBack070 : NSObject <NativeDummyTurboBack070Spec>
#else
#import <React/RCTBridgeModule.h>

@interface DummyTurboBack070 : NSObject <RCTBridgeModule>
#endif

@end
