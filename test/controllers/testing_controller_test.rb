require 'test_helper'

class TestingControllerTest < ActionDispatch::IntegrationTest
  test "should get first" do
    get testing_first_url
    assert_response :success
  end

end
