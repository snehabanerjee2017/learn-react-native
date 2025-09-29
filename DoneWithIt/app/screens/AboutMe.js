import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function AboutMe(props) {
    return (
        <SafeAreaProvider>
                    <SafeAreaView style={styles.container} edges={['top']}>
                        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                            <Text style={styles.text}>
                                Hi, I’m Soma — a scientist by profession and a baker by passion!

                                I live in a cozy suburb just north of Boston with my husband and our daughter. Originally from a small town in West Bengal, India, I moved to Boston to pursue my Master’s degree and have since built a life that blends both science and creativity.

                                While I’ve always loved cooking, my real journey into baking began after the birth of my daughter. What started as a fun way to create sweet moments soon turned into something much deeper — baking became my happy place, my creative outlet, and even my therapy. Encouraged by my family and friends (and fueled by countless late-night experiments!), I decided to take the leap and begin baking professionally.

                                I specialize in custom cakes and love crafting Indian-fusion desserts that bring together the flavors of my roots with a modern twist. Whether it’s a celebration cake or a unique sweet treat, I put my heart into every creation.

                                When I’m not in the kitchen or the lab, you’ll find me traveling, gardening, listening to audiobooks, or catching up with friends.

                                Thank you for being here — I hope my bakes bring a little joy and sweetness to your day.
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default AboutMe;