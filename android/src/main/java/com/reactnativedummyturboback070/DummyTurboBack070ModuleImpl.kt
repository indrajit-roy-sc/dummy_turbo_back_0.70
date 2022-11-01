package com.reactnativedummyturboback070;

import com.facebook.react.bridge.Promise

/**
 * This is where the module implementation lives
 * The exposed methods can be defined in the `turbo` and `legacy` folders
 */
object DummyTurboBack070ModuleImpl {
    const val NAME = "DummyTurboBack070"

    fun multiply(a: Double, b: Double, promise: Promise) {
        promise.resolve(a * b)
    }
}
